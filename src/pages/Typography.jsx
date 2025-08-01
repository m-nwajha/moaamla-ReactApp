import React from 'react';
import { Body1, Body2, Body3, H1, H2, H3, H4, H5, H6, Span1, Span2, Span3 } from '../components/Typography';

const Typography = () => {
  return (
    <div className='container'>
      <div style={{ minHeight: '100vh', paddingBlock: '8rem' }}>
        <H1>العنوان 1</H1>
        <H2>العنوان 2</H2>
        <H3>العنوان 3</H3>
        <H4>العنوان 4</H4>
        <H5>العنوان 5</H5>
        <H6>العنوان 6</H6>
        ----------------------------------
        <Body1>
          استمتع بالراحة والسهولة في إنجاز جميع معاملاتك الخاصة والتجارية في
          <br />
          مكان واحد، دون عناء أو تأخير!
        </Body1>
        <Body2>
          استمتع بالراحة والسهولة في إنجاز جميع معاملاتك الخاصة والتجارية في
          <br />
          مكان واحد، دون عناء أو تأخير!
        </Body2>
        <Body3>
          استمتع بالراحة والسهولة في إنجاز جميع معاملاتك الخاصة والتجارية في
          <br />
          مكان واحد، دون عناء أو تأخير!
        </Body3>
        ---------------------------------
        <br />
        <Span1>الوقت المستغرق تقريباً: 5دقائق</Span1>
        <br />
        <Span2>الوقت المستغرق تقريباً: 5دقائق</Span2>
        <br />
        <Span3>الوقت المستغرق تقريباً: 5دقائق</Span3>
      </div>
    </div>
  );
};

export default Typography;
