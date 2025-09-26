import { contactFormAction } from '@/lib/actions'
import { showToastError, showToastSuccess } from '@/lib/ToastContainer'
import { useMutation } from '@tanstack/react-query'

const contact = () => {
    const contactMutation = useMutation({
        mutationFn: contactFormAction,
        onSuccess: async (data) => {
            if (data) {
                showToastSuccess('Form Submitted Successfully.', 'Someone from official will contact you soon.')
            }
        },
        onError: (error: any) => {
            showToastError(error.message, 'Try again...')
        },
    })

    return { contactMutation: contactMutation }
}

export default contact