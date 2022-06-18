export interface IAccountTransferInPort {
    accountTransfer(srcUserId: string, dstUserId: string, balanceAmount: number): void // 계좌 이체
}
