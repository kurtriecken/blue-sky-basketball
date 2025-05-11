interface LinkType {
    href: string,
    label: string
}
const extLinks: Array<LinkType> = [
    {
        href: 'https://www.usab.com/play/youth-basketball-guidelines',
        label: 'USAB Guidelines'
    },
    {
        href: 'https://www.usab.com/play/youth-basketball-guidebook',
        label: 'USAB Guidebook'
    }
]

export default function Links() {
    return (
        <div className="card">
            <h2>Links to usa youth basketball guidelines</h2>
            <div>
                {
                    extLinks.map((link: LinkType) => (
                        <div key={link.href}>
                            <a 
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >{link.label}</a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}