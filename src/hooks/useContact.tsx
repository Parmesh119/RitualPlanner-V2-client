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
                        background: "linear-gradient(90deg, #38A169, #2F855A)",
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "13px",
                        letterSpacing: "1px",
                    }
                })
            }
        },
        onError: (error: any) => {
            toast.error(error.message || "Error while submitting form.", {
                description: "Try again...",
                style: {
                    background: "linear-gradient(90deg, #E53E3E, #C53030)",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "13px",
                    letterSpacing: "1px",
                }
            })
        }
    })
    
    return { contactMutation: contactMutation }
}

export default contact