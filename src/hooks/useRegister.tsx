import { registerAction } from "@/lib/actions"
import { showToastError, showToastSuccess } from "@/components/ToastContainer"
import { useRegister } from "@/store/useRegister"
import { useMutation } from "@tanstack/react-query"

const register = () => {
    const { setIsRegistered } = useRegister()

    const registerMutation = useMutation({
        mutationFn: registerAction,
        onSuccess: async (data) => {
            if (data) {
                showToastSuccess("Account created successfully!", "Please login to continue.")

                setIsRegistered(true)

            } else {
                setIsRegistered(false)
            }
        },
        onError: () => {
            showToastError("Registration failed!", "try again...")

            setIsRegistered(false)
        }
    })

    return { registerMutation: registerMutation }
}

export default register