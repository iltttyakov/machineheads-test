// utils/form.ts

/**
 * Приводит значения из AntD формы к "чистому" виду.
 * - заменяет пустые строки "" и строки "undefined" → undefined
 * - заменяет строки "null" → null
 * - рекурсивно проходит по вложенным объектам/массивам
 */
export const sanitizeFormValues = (values: any): any => {
  if (Array.isArray(values)) {
    return values.map(v => sanitizeFormValues(v))
  }

  if (values && typeof values === 'object') {
    return Object.fromEntries(
      Object.entries(values).map(([key, val]) => [key, sanitizeFormValues(val)]),
    )
  }

  if (values === '' || values === 'undefined') {
    return undefined
  }

  if (values === 'null') {
    return null
  }

  return values
}
