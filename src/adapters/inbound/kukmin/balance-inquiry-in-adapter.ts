import { IBalanceInquiryInPort } from '../../../ports/inbound/balance-inquiry-in-port'

interface IDependency {
    balanceInquiryDomain: IBalanceInquiryInPort
}

interface IRequestKukmin {
    getBalanceInquiry(userId: string): Promise<number>
}

/**
 *
 * @param dependency 의존성
 * @returns 잔액조회 함수
 */
export function balanceInquiryInAdapterInitiator(dependency: IDependency): IRequestKukmin {
    const {
        balanceInquiryDomain: { getBalanceInquiry },
    } = dependency

    return {
        async getBalanceInquiry(userId: string): Promise<number> {
            console.log('Kukmin bank get balance inquiry')
            return await getBalanceInquiry(userId)
        },
    }
}
