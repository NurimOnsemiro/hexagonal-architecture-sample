import { IBalanceInquiryOutPort } from '../../../ports/outbound/balance-inquiry-out-port'

async function mockSelectBalanceInquiry(userId: string) {
    return userId.length * 100
}

interface IDependency {}

/**
 * 잔액조회 아웃바운드 어댑터
 *
 * @param dependency 의존성 객체
 * @returns IBalanceInquiryOutPort 구현체
 */
export function balanceInquiryOutAdapterInitiator(dependency: IDependency): IBalanceInquiryOutPort {
    const {} = dependency

    return {
        async selectBalanceInquiry(userId: string): Promise<number> {
            console.log('MariaDB select balance inquiry.', userId)
            return await mockSelectBalanceInquiry(userId)
        },
    }
}
