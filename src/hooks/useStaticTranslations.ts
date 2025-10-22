// Static translations hook to replace useTranslations for static export
import uaMessages from '../../messages/ua.json'

export const useStaticTranslations = () => {
  const t = (key: string) => {
    // Helper function to get nested value from object
    const getNestedValue = (obj: Record<string, unknown>, path: string) => {
      return path.split('.').reduce((current, key) => current?.[key] as Record<string, unknown>, obj)
    }
    
    const value = getNestedValue(uaMessages, key)
    return (value as unknown as string) || key
  }
  
  return { t }
}
