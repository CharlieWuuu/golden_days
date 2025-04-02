export function createFakeEcpayForm(): string {
    const tradeNo = `ORDER${Date.now()}`;
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const dateStr = `${now.getFullYear()}/${pad(now.getMonth() + 1)}/${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    return `
	  <form id="ecpay-form" method="POST" action="https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5">
		<input type="hidden" name="MerchantID" value="2000132" />
		<input type="hidden" name="MerchantTradeNo" value="${tradeNo}" />
		<input type="hidden" name="MerchantTradeDate" value="${dateStr}" />
		<input type="hidden" name="PaymentType" value="aio" />
		<input type="hidden" name="ChoosePayment" value="Credit" />
		<input type="hidden" name="TotalAmount" value="500" />
		<input type="hidden" name="TradeDesc" value="金時光測試訂單" />
		<input type="hidden" name="ItemName" value="金瓜石風味鹽 x1" />
		<input type="hidden" name="ReturnURL" value="https://example.com/api/callback" />
		<input type="hidden" name="ClientBackURL" value="http://localhost:3000/orders/fake123" />
	  </form>
	`;
}
