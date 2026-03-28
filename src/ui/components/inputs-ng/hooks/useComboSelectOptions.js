import {useState, useEffect} from "react"
import { extractOptions, MODE } from "./tools";

const useComboSelectOptions = ({autocompleteHandler, autocompleteHandlerParams = [], renderDependencies = [], inputValue, value, onChange, open, setMode, mode, lazyLoad, disabled}) => {
  
    const [fetchedOptions, setFetchedOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        if (mode === MODE.AUTOCOMPLETE) {
            return
        }

        if (!open || fetchedOptions.length) {
            setFilteredOptions(fetchedOptions)
            return
        }
        
        fetchOptions(autocompleteHandlerParams)
    }, [open]) 

    useEffect( () => {
       !disabled && !lazyLoad && fetchOptions(autocompleteHandlerParams)
    }, [...autocompleteHandlerParams, ...renderDependencies, disabled, lazyLoad])

    const fetchOptions = (autocompleteHandlerParams) => {
        setLoading(true);
        autocompleteHandler({handlerParams: autocompleteHandlerParams})
        .then(result => {
            if (!result.body.metadata.NEXTCURSORPOSITION) {
                const options = extractOptions(result)
                setMode(MODE.SELECT)
                setFetchedOptions(options)
                setFilteredOptions(options)
                //setFilteredOptions(filterOptions(options, inputValue))

                if (!value && !lazyLoad && options.length === 1) {
                    onChange?.(options[0], true)
                }
            } else {
                setMode(MODE.AUTOCOMPLETE)
            }
            
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
        }) 
    }

    useEffect( () => {
        setFetchedOptions([])
        setFilteredOptions([])
    }, [...renderDependencies])

    useEffect( () => {
        if (!fetchedOptions.length) {
            return
        }

        setFilteredOptions(filterOptions(fetchedOptions, inputValue))
    }, [inputValue])

    // put filter as external funciton, case insensitive
    const filterOptions = (options, inputValue) => {
        return options.filter(o => o?.code?.toString().toLowerCase().includes(inputValue.toLowerCase()))
    }

    return [filteredOptions, loading];
};

export default useComboSelectOptions;