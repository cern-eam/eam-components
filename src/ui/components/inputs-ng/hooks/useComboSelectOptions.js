import {useState, useEffect} from "react"
import { extractOptions } from "./tools";

const useComboSelectOptions = (autocompleteHandler, autocompleteHandlerParams = [], renderDependencies = [], inputValue, value, open, fieldId) => {
  
    const [fetchedOptions, setFetchedOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect( () => {
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
            setFetchedOptions(extractOptions(result));
            setFilteredOptions(extractOptions(result))
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
        }) 
    }

    useEffect( () => {
        setFetchedOptions([])
    }, [...renderDependencies])

    useEffect( () => {
        if (!fetchedOptions.length) return
        
        const filtered = fetchedOptions.filter(o => o?.code?.toString().includes(inputValue))

        setFilteredOptions(filtered)
    }, [inputValue])

    return [filteredOptions, loading];
};

export default useComboSelectOptions;