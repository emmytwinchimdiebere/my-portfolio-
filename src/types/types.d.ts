import { links } from "../../lib/data";

export type SectionNamesProps = (typeof links)["name"][number]
export type ActiveLinkStateProps  = typeof links[number]["name"]
export type ActiveLinkProps = {
    children:React.ReactNode
}
export type setActiveSectionProps = {
    activeLink : ActiveLinkStateProps,
    setActiveLink : React.Dispatch<React.SetStateAction<ActiveLinkStateProps>>
    lastTimeLinkClicked:number,
    setLastTimeLinkClicked:React.Dispatch<React.SetStateAction<number>>
}