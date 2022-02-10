import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "SourceComponent/ContentWrapper";
import "./Checkout.override.style.scss";
import StperComponent from "../../component/SteperProgressBar/Steper.component";
import {
  SHIPPING_STEP,
  BILLING_STEP,
  DETAILS_STEP,
} from "SourceRoute/Checkout/Checkout.config";
class Checkout extends SourceCheckout {
  render() {
    return (
      <main block="Checkout">
        <StperComponent
          activeStep={this.props.checkoutStep}
          steperList={[SHIPPING_STEP, BILLING_STEP, DETAILS_STEP]}
        />
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}
export default Checkout;
