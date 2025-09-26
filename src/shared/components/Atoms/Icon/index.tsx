import { type iconProps } from './types'

const icons = new Map()

icons.set('logo', '/icons/logo.svg')


const getCorrespondingIcon = (id: string) => (icons.has(id) ? icons.get(id) : '')

export function Icon ({ id, iconSize = 24, classIcon }: iconProps) {

  return  (
    <img
      alt={id}
      width={iconSize}
      height={iconSize}
      src={getCorrespondingIcon(id)}
      className={classIcon}
      data-testid={id}
    />
  )
}
