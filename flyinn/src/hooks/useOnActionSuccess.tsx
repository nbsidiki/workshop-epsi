import { useEffect } from 'react'
import usePrevious from './usePrevious'

// Triggers handleSuccess when an action end with success
const useOnActionSuccess = (success: boolean, onSuccess: () => void) => {
    const prevSuccess = usePrevious(success)

    useEffect(() => {
        if (prevSuccess === false && success) {
            onSuccess()
        }
    }, [success])
}

export default useOnActionSuccess