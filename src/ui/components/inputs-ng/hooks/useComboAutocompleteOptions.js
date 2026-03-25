import {useState, useEffect, useMemo, useRef} from "react"
import debounce from 'lodash/debounce';
import { fetchHistory, HISTORY_ID_PREFIX } from "../tools/history-tools";
import { extractOptions } from "./tools";

const useComboAutocompleteOptions = ({autocompleteHandler, autocompleteHandlerParams = [], renderDependencies = [], inputValue, value, open, id, enabled}) => {
  
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const abortController = useRef(null);

    // AUTOCOMPLETE
    useEffect( () => {
        setOptions([])

        if (!enabled) {
            return
        }
        // Cancel the old request in the case it was still active
        //fetchOptionsDebounced?.cancel()
        abortController.current?.abort();

        // Don't continue if not open
        if (!open) {
            return;
        }
        // If there is a value and nothing new was typed do nothing 
        if (value?.code && (value?.code === inputValue)) {
            return;
        }

        if (!inputValue?.trim()) {
            setOptions(fetchHistory(HISTORY_ID_PREFIX + id)); // By focus on empty input fetch the history
            return;
        }
        abortController.current = new AbortController();
        fetchOptionsDebounced(autocompleteHandlerParams, inputValue)
    }, [inputValue, value?.code, open]) 

    // Memoizing as we always need the same instance of the function that remembers and debounces previous requests 
    const fetchOptionsDebounced = useMemo(
        () => debounce( (...args) => fetchOptions(...args), 200), [...autocompleteHandlerParams, ...renderDependencies]
    );

    const fetchOptions = (autocompleteHandlerParams, inputValue) => {
        setLoading(true);

         autocompleteHandler({handlerParams: autocompleteHandlerParams, filter: inputValue}, { signal: abortController.current.signal })
        .then(result => {
            setOptions(extractOptions(result));
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
        }) 

    }

    return [options, loading];
};

export default useComboAutocompleteOptions;