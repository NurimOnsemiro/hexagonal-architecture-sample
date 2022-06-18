import { IBalanceInquiryInPort } from '../ports/inbound/balance-inquiry-in-port'
import { IBalanceInquiryOutPort } from '../ports/outbound/balance-inquiry-out-port'

interface IDependency {
    balanceInquiryOutAdapter: IBalanceInquiryOutPort
}

export function balanceInquiryDomainInitiator(dependency: IDependency): IBalanceInquiryInPort {
    const {
        balanceInquiryOutAdapter: { selectBalanceInquiry },
    } = dependency

    return {
        async getBalanceInquiry(userId: string): Promise<number> {
            console.log('get balance inquiry domain.', userId)
            return await selectBalanceInquiry(userId)
        },
    }
}
