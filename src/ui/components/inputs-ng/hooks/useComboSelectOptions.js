import {useState, useEffect} from "react"
import { extractOptions, MODE } from "./tools";

const useComboSelectOptions = ({autocompleteHandler, autocompleteHandlerParams = [], renderDependencies = [], inputValue, open, setMode, mode}) => {
  
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

    const fetchOptions = (autocompleteHandlerParams) => {
        
        setLoading(true);
        autocompleteHandler({handlerParams: autocompleteHandlerParams})
        .then(result => {
            if (!result.body.metadata.NEXTCURSORPOSITION) {
                setMode(MODE.SELECT)
                setFetchedOptions(extractOptions(result))
                setFilteredOptions(extractOptions(result))
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
        if (!fetchedOptions.length) return
        
        const filtered = fetchedOptions.filter(o => o?.code?.toString().includes(inputValue))

        setFilteredOptions(filtered)
    }, [inputValue])

    return [filteredOptions, loading];
};

export default useComboSelectOptions;