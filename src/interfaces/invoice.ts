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

export {
    IInvoiceCreated,
    IInvoices
}