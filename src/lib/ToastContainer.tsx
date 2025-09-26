import { toast } from 'sonner'

// Utility functions for direct toast usage
export const showToastSuccess = (message: string, description: string) => {
  toast.success(message, {
    description: description,
    style: {
      background: "var(--toast-success-bg)",
      color: "var(--toast-success-text)",
      fontWeight: 600,
      fontSize: "14px",
      letterSpacing: "0.5px",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    }
  })
}

export const showToastError = (message: string, description: string) => {
  toast.error(message, {
    description: description,
    style: {
      background: "var(--toast-error-bg)",
      color: "var(--toast-error-text)",
      fontWeight: 600,
      fontSize: "14px",
      letterSpacing: "0.5px",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    }
  })
}