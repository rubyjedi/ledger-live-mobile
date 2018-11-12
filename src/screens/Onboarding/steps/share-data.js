// @flow

import React, { Component } from "react";

import Button from "../../../components/Button";
import OnboardingLayout from "../OnboardingLayout";
import { withOnboardingContext } from "../onboardingContext";
import AnalyticsRow from "../../Settings/General/AnalyticsRow";
import ReportErrorsRow from "../../Settings/General/ReportErrorsRow";
import TechnicalDataRow from "../../Settings/General/TechnicalDataRow";
import TermsOfUseRow from "../../Settings/General/TermsOfUseRow";

import type { OnboardingStepProps } from "../types";

class OnboardingStepShareData extends Component<OnboardingStepProps> {
  Footer = () => {
    const { next } = this.props;
    return <Button type="primary" title="Next" onPress={next} />;
  };

  render() {
    return (
      <OnboardingLayout
        header="OnboardingStepShareData"
        Footer={this.Footer}
        noHorizontalPadding
        noTopPadding
      >
        <AnalyticsRow />
        <ReportErrorsRow borderTop />
        <TechnicalDataRow borderTop />
        <TermsOfUseRow borderTop />
      </OnboardingLayout>
    );
  }
}

export default withOnboardingContext(OnboardingStepShareData);
