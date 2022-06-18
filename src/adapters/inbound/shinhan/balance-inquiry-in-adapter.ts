import { IBalanceInquiryInPort } from '../../../ports/inbound/balance-inquiry-in-port'

interface IDependency {
    balanceInquiryDomain: IBalanceInquiryInPort
}

interface IRequestShinhan {
    getBalanceInquiry(userId: string, userAge: number): Promise<number>
}

/**
 * 잔액조회 인바운드 어댑터
 *
 * @param dependency 의존성
 * @returns 잔액조회 함수
 */
export function balanceInquiryInAdapterInitiator(dependency: IDependency): IRequestShinhan {
    const {
        balanceInquiryDomain: { getBalanceInquiry },
    } = dependency

    return {
        async getBalanceInquiry(userId: string, userAge: number): Promise<number> {
            console.log('Shinhan bank get balance inquiry.', userId, userAge)
            return await getBalanceInquiry(`${userId}:${userAge}`)
        },
    }
}
