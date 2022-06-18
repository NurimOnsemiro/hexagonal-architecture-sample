// import { IBalanceInquiryInPort } from '../../../ports/inbound/balance-inquiry-in-port'

// interface IDependency {
//     balanceInquiryDomain: IBalanceInquiryInPort
// }

// /**
//  *
//  * @param dependency 의존성
//  * @returns 잔액조회 함수
//  */
// export async function balanceInquiryInAdapterInitiator(dependency: IDependency) {
//     const {
//         balanceInquiryDomain: { getBalanceInquiry },
//     } = dependency

//     return async (userId: string, userType: number) => {
//         console.log('Shinhan bank get balance inquiry')
//         return getBalanceInquiry(`${userId}-${userType}`)
//     }
// }

import { IBalanceInquiryInPort } from '../../../ports/inbound/balance-inquiry-in-port'

interface IDependency {
    balanceInquiryDomain: IBalanceInquiryInPort
}

interface IRequestShinhan {
    getBalanceInquiry(userId: string, userType: number): Promise<number>
}

/**
 *
 * @param dependency 의존성
 * @returns 잔액조회 함수
 */
export function balanceInquiryInAdapterInitiator(dependency: IDependency): IRequestShinhan {
    const {
        balanceInquiryDomain: { getBalanceInquiry },
    } = dependency

    return {
        async getBalanceInquiry(userId: string, userType: number): Promise<number> {
            console.log('Shinhan bank get balance inquiry.', userId, userType)
            return await getBalanceInquiry(`${userId}-${userType}`)
        },
    }
}
