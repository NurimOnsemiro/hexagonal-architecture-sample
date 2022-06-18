import { IBalanceInquiryInPort } from '../ports/inbound/balance-inquiry-in-port'
import { IBalanceInquiryOutPort } from '../ports/outbound/balance-inquiry-out-port'

interface IDependency {
    balanceInquiryOutAdapter: IBalanceInquiryOutPort
}

/**
 * 잔액조회 도메인
 *
 * @param dependency 의존성 객체
 * @returns 인바운드 포트 구현체
 */
export function balanceInquiryDomainInitiator(dependency: IDependency): IBalanceInquiryInPort {
    const {
        balanceInquiryOutAdapter: { selectBalanceInquiry },
    } = dependency

    return {
        async getBalanceInquiry(userId: string): Promise<number> {
            if (userId.startsWith('Park')) {
                return 0
            }
            console.log('get balance inquiry domain.', userId)
            return await selectBalanceInquiry(userId)
        },
    }
}
