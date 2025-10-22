import { cookies } from 'next/headers'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  const allCookies = await cookies()
  const locale = allCookies.get('locale')?.value || 'ua'

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
