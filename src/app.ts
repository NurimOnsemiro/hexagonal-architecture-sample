import { balanceInquiryInAdapterInitiator } from './adapters/inbound/shinhan/balance-inquiry-in-adapter'
import { balanceInquiryOutAdapterInitiator } from './adapters/outbound/mongodb/balance-inquiry-out-adapter'
import { balanceInquiryDomainInitiator } from './domain/balance-inquiry-domain'

// 아웃바운드 어댑터 초기화
const balanceInquiryOutAdapter = balanceInquiryOutAdapterInitiator({})

// 도메인 초기화
const balanceInquiryDomain = balanceInquiryDomainInitiator({ balanceInquiryOutAdapter })

// 인바운드 어댑터 초기화
const balanceInquiryInAdapter = balanceInquiryInAdapterInitiator({ balanceInquiryDomain })

;(async () => {
    const result = await balanceInquiryInAdapter.getBalanceInquiry('honsemiro', 20)
    console.log(result)
})()
