import { IBalanceInquiryInPort } from '../../../ports/inbound/balance-inquiry-in-port'

interface IDependency {
    balanceInquiryDomain: IBalanceInquiryInPort
}

interface IRequestKukmin {
    getBalanceInquiry(userId: string, userCity: string): Promise<number>
}

/**
 * 잔액조회 인바운드 어댑터
 *
 * @param dependency 의존성
 * @returns 잔액조회 함수
 */
export function balanceInquiryInAdapterInitiator(dependency: IDependency): IRequestKukmin {
    const {
        balanceInquiryDomain: { getBalanceInquiry },
    } = dependency

    return {
        async getBalanceInquiry(userId: string, userCity: string): Promise<number> {
            console.log('Kukmin bank get balance inquiry.', userId, userCity)
            return await getBalanceInquiry(`${userId}:${userCity}`)
        },
    }
}
