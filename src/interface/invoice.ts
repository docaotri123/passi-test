interface IInvoiceCreated {
    type: string,
    soldTo: string,
    invoiceDate: number,
    shipTo: string
}

interface IInvoices {
    type?: string,
    take?: number,
    invoiceNumber?: number
}

interface IVInvoiceLineItem {
    id: string
}

interface IInvoiceUpdated {
    invoiceId: number,
    inventories?: IVInvoiceLineItem[]
}

export {
    IInvoiceCreated,
    IInvoices,
    IInvoiceUpdated
}