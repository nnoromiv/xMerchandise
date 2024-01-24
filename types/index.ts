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

export interface StorePropsContents {
    index: number
    amount: number
    itemImage?: string | StaticImport,
    itemName?: string,
    itemPrice: number
}

export interface StoreProps {
    super: NavigationProps,
    storeTitle: string
    storeItems: StorePropsContents[]
    CartItems: StorePropsContents[]
}

interface StatisticsProps {
    number: string,
    type: string,
    icon: ReactNode
}
export interface Statistics {
    statistics: StatisticsProps[]
    customStyle?: string
}

export interface CartFunctionProps  {
    index: number
    CartItems?: StorePropsContents[]
    cartImage?: string | StaticImport
    cartName?: string, 
    cartPrice: number
    amount: number
  }