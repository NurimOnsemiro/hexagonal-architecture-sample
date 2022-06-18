export interface IBalanceInquiryInPort {
    getBalanceInquiry(userId: string): Promise<number> // 사용자 잔액 조회
}
