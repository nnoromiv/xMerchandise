import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { ReactNode } from "react"

export interface NavigationProps {
    handleMenu?: () => void
    show: boolean,
    active?: string
}

export interface SearchProps {
    super: NavigationProps,
    pageIcon?: ReactNode
}

export interface ButtonProps {
    title: string
    image?: boolean
    customStyle? : string
}

interface StorePropsContents {
    itemImage: string | StaticImport,
    itemName: string,
    itemPrice: string
}

export interface StoreProps {
    super: NavigationProps,
    storeTitle: string
    storeItems: StorePropsContents[]
}