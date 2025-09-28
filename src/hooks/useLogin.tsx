import { loginAction } from "@/lib/actions"
import { authService } from "@/lib/auth"
import { showToastError, showToastSuccess } from "@/lib/ToastContainer"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { useLogin as useLoginStore } from "@/store/useLogin"

const login = () => {
    const navigate = useNavigate()
    const { setLoggedIn, setOnboarded } = useLoginStore()

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

                    // Update store state
                    setLoggedIn(true)

                    // Navigate to dashboard after successful token storage
                    navigate({ to: "/app/dashboard" })
                } else if ('isOnboarded' in data) {
                    // Update store state
                    setLoggedIn(true)
                    setOnboarded(data.isOnboarded)

                    if (data.isOnboarded === false) {
                        navigate({ to: "/app/onboard/$id", params: { id: "1" } })
                    } else {
                        navigate({ to: "/app/dashboard" })
                    }
                }
                showToastSuccess("Login Successful.");
            }
        },
        onError: (error: any) => {
            showToastError(error.message, "Try again...")
        }
    })

    return { loginMutation: loginMutation }
}

export default login