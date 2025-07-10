import {useState, useEffect} from "react"
import { extractOptions } from "./tools";

const useComboAutocompleteOptions = (autocompleteHandler, autocompleteHandlerParams = [], renderDependencies = [], inputValue, value, open, fieldId) => {
  
    const [options, setOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        if (!open || options.length) return
        fetchOptions(autocompleteHandlerParams)
    }, [open]) 

    const fetchOptions = (autocompleteHandlerParams) => {
        setLoading(true);
        autocompleteHandler({handlerParams: autocompleteHandlerParams})
        .then(result => {
            setOptions(extractOptions(result));
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
        }) 
    }

    useEffect( () => {
        setOptions([])
    }, [...renderDependencies])

    useEffect( () => {
        if (!options.length) return

        const filtered = options.filter(o => o?.code?.includes(inputValue))

        setFilteredOptions(filtered)
    }, [inputValue, options])

    return [filteredOptions, loading];
};

export default useComboAutocompleteOptions;