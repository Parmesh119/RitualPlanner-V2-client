import { registerAction } from "@/lib/actions"
import { showToastError, showToastSuccess } from "@/lib/ToastContainer"
import { useRegister } from "@/store/useRegister"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"

const register = () => {
    const navigate = useNavigate()
    const { setIsRegistered } = useRegister()

    const registerMutation = useMutation({
        mutationFn: registerAction,
        onSuccess: async (data) => {
            if(data) {
                showToastSuccess("Account created successfully!", "Please login to continue.")

                setIsRegistered(true)

                navigate({ to: "/auth/login"})
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