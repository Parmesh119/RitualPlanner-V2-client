import { loginAction } from "@/lib/actions"
import { authService } from "@/lib/auth"
import { showToastError, showToastSuccess } from "@/lib/ToastContainer"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { useLogin } from "@/store/useLogin"
import { useRegister } from "@/store/useRegister"

const login = () => {
    const navigate = useNavigate()
    const { setLoggedIn, setOnboarded } = useLogin()
    const { setIsRegistered } = useRegister()

    const loginMutation = useMutation({
        mutationFn: loginAction,
        onSuccess: async (data) => {
            if (data) {
                if ('accessToken' in data && 'refreshToken' in data) {
                    // Store tokens in localStorage
                    await authService.setTokens({
                        accessToken: data.accessToken,
                        refreshToken: data.refreshToken
                    });

                    setLoggedIn(true)
                    setOnboarded(true)
                    setIsRegistered(true)
                    navigate({ to: "/app/dashboard" })

                    showToastSuccess("Login Successful.")
                } else if ('isOnboarded' in data) {
                    // Update store state
                    setLoggedIn(true)
                    setOnboarded(data.isOnboarded)
                    setIsRegistered(true)

                    if (data.isOnboarded == false) {
                        await authService.setOnboardToken(data.token)
                        navigate({ to: "/app/onboard/$id", params: { id: "1" } })
                    } else {
                        navigate({ to: "/app/dashboard" })
                    }
                    showToastSuccess("Login Successful.", "Complete the details to get start.");
                }
            }
        },
        onError: () => {
            showToastError("Invalid credentials!", "Try again...")
        }
    })

    return { loginMutation: loginMutation }
}

export default login