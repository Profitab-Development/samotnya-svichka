// import { baseURL, chatId, validator } from '@/constants/tgUrls'
//
// interface TelegramResponse {
//   ok: boolean
//   // eslint-disable-next-line
//   result: any // You might want to define a more specific type based on the actual response
// }
//
// export const sendInTg = async (msg: string): Promise<TelegramResponse> => {
//   try {
//     const response = await fetch(baseURL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         validator: validator,
//         chat_id: chatId,
//         message: msg,
//       }),
//     })
//
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`)
//     }
//
//     const data: TelegramResponse = await response.json()
//     return data
//   } catch (error) {
//     console.error('Error sending message to Telegram:', error)
//     throw error // Re-throw the error so the caller can handle it
//   }
// }

import { baseURL, chatId, validator, crmURL } from '@/constants/tgUrls'

interface TelegramResponse {
  ok: boolean
  // eslint-disable-next-line
  result: any // You might want to define a more specific type based on the actual response
}

export const sendInTg = async (msg: string): Promise<TelegramResponse> => {
  try {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        validator: validator,
        chat_id: chatId,
        message: msg,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: TelegramResponse = await response.json()
    return data
  } catch (error) {
    console.error('Error sending message to Telegram:', error)
    throw error // Re-throw the error so the caller can handle it
  }
}

const sendInCrm = async (msg: string | FormData | object) => {
  return await fetch(crmURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(msg),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response
    })
    .catch((error) => {
      console.error('Помилка при виконанні запиту:', error)
    })
}

export { sendInCrm }
