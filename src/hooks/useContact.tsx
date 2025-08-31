import { contactFormAction } from '@/lib/actions'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

const contact = () => {
    const contactMutation = useMutation({
        mutationFn: contactFormAction,
        onSuccess: async (data) => {
            if (data) {
                toast.success("Form submitted successfully.", {
                    description: "Someone from officials will contact you soon...",
                    style: {
                        background: "#38A169",
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "13px",
                        letterSpacing: "1px",
                    }
                })
            }
        },
        onError: (error: any) => {
            toast.error(error.message, {
                description: "Try again...",
                style: {
                    background: "#E53E3E",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "13px",
                    letterSpacing: "1px",
                }
            })
        },
    })

    return { contactMutation: contactMutation }
}

export default contact