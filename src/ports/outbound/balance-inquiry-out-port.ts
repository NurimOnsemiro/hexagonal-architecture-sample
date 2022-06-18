export interface IBalanceInquiryOutPort {
    selectBalanceInquiry(userId: string): Promise<number> // 사용자 잔액 조회
}
