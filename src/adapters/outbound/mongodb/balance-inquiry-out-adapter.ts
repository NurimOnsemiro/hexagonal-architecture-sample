import { IBalanceInquiryOutPort } from '../../../ports/outbound/balance-inquiry-out-port'

interface IDependency {}

/**
 *
 * @param dependency 의존성
 * @returns 잔액조회 함수
 */
export function balanceInquiryOutAdapterInitiator(dependency: IDependency): IBalanceInquiryOutPort {
    const {} = dependency

    return {
        async selectBalanceInquiry(userId: string): Promise<number> {
            console.log('MongoDB select balance inquiry : 100')
            return 100
        },
    }
}
