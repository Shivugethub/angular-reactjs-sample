import {Injector} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactHero from './react-hero';
import App from './App';
interface IReactApplication {
  injector: Injector;
}

class ReactApp extends React.Component<IReactApplication, any> {
  constructor(props) {
    super(props);
  }

  renderTopRightUI = () => {
    return (
      <button onClick={() => alert("This is dummy top right UI")}>
        {" "}
        Click me{" "}
      </button>
    );
  };

  renderFooter = () => {
    return (
      <button onClick={() => alert("This is dummy footer")}>
        {" "}
        custom footer{" "}
      </button>
    );
  };



  render() {
    return (
      <div className={'renderer'}>
        <h2>ReactJS component: </h2>
        <img width='100' alt='Angular Logo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAV1BMVEX///9h2vtR1/tZ2ftm2/vx+//4/f/m+P6F4fzb9f583/zq+f7g9/7w+//P8v73/f+s6v297v3U9P6a5vx03vuB4Pyx6/3H8P2w6/2P4/y57f2h5/yV5fyy8WdPAAANDklEQVR4nO1di3KyOhCuCQoCIiCKoO//nEcgm2xCbj1VgX/yzXSmVaDJZu+7CT8/AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAR/A4S83n+Js/66BLIpTn+zIC7ukrH9/d1Z1ERnRlPH7B/dVZAmhdDeCUkKS9jc3n+4Rv/t1P7lmnxrmN3AnfCpAj4fvhOqrcvOLGrePjvaj6MhuBko6H2YvGpUSA8jz42P+EDrNbCZqnBx3HhsNFUdiPL4y8rejN8xnoIZ1SvvEeOeO/ErjrAUnwmdO6PiDqUEL4429JB2vO3dNRPln5E/meSEkbPTkkr/+OsRtRzE5SKKf1KmhmBDN/Thelz0Yaenlm5N4D3I2dpKLz4oELTmlOn8DCxalJTI6/IHb87uY4iRH6dPTBVGDzJcYaQpKe/m7evqOlp8c9idwIAaO3j/RdCN5jeMd8qzmvgQjL/3cqD+DlrHFef5VjAwmwXJSoc+fGm2SER2rrR/TGtJO+2UlBIXc+acXTgoa6ad7pZsUEsbOhnDsLPQCAXKlgj4m74MxW/OJAX8OwM7GC4Q80HT4+xwBKSg1ysDe9dRVophmlpqvyMTko/NPJpTm1eJMRRMtcvMVK8R9kmyrq40it0LIh1UZPKfHbssPZ4OurBcJv0qQwuyaD7hNj71bL1obUi/rVysxGN05khuT8tyYG84E25W3yXZSGNa44q7jSDyavGuYXwHztJyhwyFCAcrV+diYbNCo+hu/lJPCY7WZUY3+PL5vwpsWOeILd+7v/C/TIsbak7pSfxDx7d4yxm/BkxZ7JSOqieQk/MO0OMiUeHmgjhv+YRmBdB4F00otTvuATepOc/YCATKi9MmDVEOQD8i2aFN9fC2ezR2MKbAIsfrX+RZ9LeaD2wLKFkgxrvIhYjrDGpHUlPHRlsDSWpZ5cWvKhJ+bFBszVR7h7+rwcMWpB569AD9duBrmx7JUQG++YoW4uTKToCyRGBUgNOa45LLF/EVrS/3+AN8o5dEbEMNIQg81tD7kdkeAs4As+VCYJ6YOHt/wd1U4W52tvUkaGlWJaJ+6tWIRW0F96AlTjvanLM+PE/I422dAC703ddyiq/Xzc92ZtNwpv4j0pgr4gl5yjWmttpji40YV64Os6C/pMH19u44MOhAmvfQFJslliyaVl7imWOtw7J/N0I3iQwWJIkMTS/Tsj1NgM8nW5uqpvHCWVZdIacr5LSaCVDFEv5vrzAFT8TcySARhD9pWxD4geQsFdETZmupsO9eMJrtBo6hp0vSapk0TRcyuuBipa7cjJUVnEAzU0NzW+UmX6Tmc4qOorpoeQxJ7rXEliB9Us7CjQWguJTjZ9kIrNCTQ+8Vgfl6fXdbeK99qWpcHrdfdR0eBeVnOCtmVXTeohlNxS3QamJJmzfHqTcfTaVlAdHGEtkRX7v8MF4IrsS/KdP5oSu/r1ByHUqv0cCAVeUnIAJASZD8PRPd08lghNZTtEVzIUZ7vzj7yia1Yrge1WlRUeTJQY22tbK06wK6AnCdP1EKk7uxEGADd5CJXkUCEUzzV3nI3n30PmbTFgZLrqNRapTWVlUM8WxIZE4n8P3PAxzRPK++zIc1qbEopUYKWbCn3ePRCcfoWQ0G5sNuheZZ9uy8l3ljJvhKpsV+yc5PmB59ZmZsTR1l9zptnW8yNNHIW6T+PAg2IpNJEeywkzDLoal5xXdQaJof27yldwW6XXIpjiv/54q7oHfVwN0piQRIS8DiV5Tv06ehZEpKqGpA7GcMfiogA8GaspQ0K6uHezb3AKfcy8nWpV5zYJ5lZxxu7Z9AFV/EoGS1qiFy0tij2P2iVV8UXExwlOYUd72TvjEayuYVn74HFtEXJh1gPe5X+o+CjoJG2fAM5/ApqQ7InUMw9SVmzsgteLspNLyITYtFOvVhug/e3G5mTuRTNYe5Szztdp0dJOqcBxojsU+WiShbKC2d8AEa/DxaWxVWSqj/pSKEUxcCuNtoNWwgtH8syXhdUfGx5aVkfSIFII38HkNuUEukiS6aTe3KLZENhKayV3ofkHGKiaZQFuwqrjAxfRW3b2WGb4iLBCQzd6uLgucgr3uxMkLgH7wO315Rrran6Cjx3SKIMjMRAsYktlDgWEdPVpsVcmAX8z2mHiFM8hSjIib2bOdkt1wgFYzgjGWZsvu9ksHE7U45iKpJeSSy0kCYjGMOpFYuF9q/aGywQOAPIbazRjAQCct4LGMNDKbIxfbtVxbvrFJrUFMtrrQdJV8b+OpG1MH3bxWAjdPQsD4C8hZz79qcFhKseOaApgPt6OxcES84LDa1ZNlLIigFcFI/uPWZIvp7VcXnFAG5U5VYBTbUDINtOUQpwymO+1FZelpZ2VcCEGZA9kYfFjhgudPI+s03ubWvvRuXn2aA5S4yhDVJ3c15DFSJXGzgEgguEqhCO2KUTLb+83hbliS/D/GNvyOHllwUKaVAzj2z/u5ViM3yl0fGU1vVMTN+ogI0GyzTOg36PLJViSUXKw/Rii4tvzM43utJF6qsi1DAWBUFzgr+FPUKDxpC0BeR7wEcxak++AXqp87f4ohkHAHIEQa2k/UodMeRjcuAAotiR4+NpreWyv/woE1PCkw3wAbIiu8ePOTHkdHrM60t3a9jF0/GG3umvQCSgd7qAmiXeXhSArJPss89OqVMyp0DBDIRFWxOoeWXBuafzoxBJS5LMw8OHyHEkWnckbqRaUSMrHnAYBr5PTSKwF0eKUKtJ+zzEiT+UlOpQGGMPKiAzRFh1MpYQx4NOVdYCjTkQ2VBDxIW3JQVkwgU5hsqBJSAiozcGbWuzPZeHun88yn4uY7iEyM8ua5VLkFu7gt2JrVwSRZLykPrjdXbVBnCzmL6c9xzspQYxjyawL+Ak9UGQjjsI7BPmLUIHgu9GW2g5YHNUheTYYUrQZi1nAUsnblIS9ePa51hEfoT4++WpwRXjpgFbkn0fyf9yRQcBn+WTfYeOrQP4BFyj/a5JCSjHuSyBTUUHpVtLa8KWRC6f0Du0bLPuC7FkHVaGDkC/htAPTEiiRGkjnbXArAC1cl4x6EohyJCL8EhIgglGWdKDHNsAJaLFW5O0qFNdV3xZc7dD081rADQb8Cj9XJezRw/e2TopMSB+alrjxw1S+UgQ5lQ7pQSSG9MRCHn1jLTN8d36pAPjIGt4GPZAkK5sYWeIQ0p4qN8WZaffrUbJ7rYujalFrt1BMjZy84/tUtLobpFJ+1w3SyDUF9eOO0KjNOkuj/LW99WAvr+Vj0v3sj7UnBZm93br1RJaXBzEYKs+g/OuzW3hFmryTVsyR8GYftnYsa4/oq2/73b/Y8OySoYXHZ5VzEKSbR1/IdJzw++nokzo/9nCPVGB7JJ7PdoM5smuIiL9BdjBKCIo3R+rRzK8b8eTIgMRSJQ8qqNwPR8QkmwLUzwxz9xkdXtDuTCT5qTprT3OKnLbPBMbokq98eOLX7RVf7uVA+63vmpraNfRV3yw4G0I05QMW8t4L6bK7Xwvr6FNTcmIbAT2Vgg4MUlJzPG+FVOjJDvabjM+54jMfo6SeFHLcX6T5bRGlvTcliGpVTOigh+/J/idn+ZpLg8zjby2Hal2OA/O4/USwTqNO4hlj11B9v8XYAtoaZjgugEsJBcbiwS4X1OwQjCvyNYAAGV2Jki8Xc/mSTmOc1snJiVn7+BGx7qis/isa37aooPh1XXKFcRDbNeyL/lhqa7Fv6CxuVoAYTh4ecVwEB/HFk+VYk6RY2bi1XhgYV3hOPV67rrgRwvujAMpnHvd/2FayLvOPErl/zItRNeZY2sdwxZpwXSnR0ApcsQ+HhTTna6zh1YF710tN8QX7n7ETdrUyY9yB9dSW6PrbQIbfcGZ5+HVyg489V2RM2zSB2exmV0bnnlHpMhz2jlpk7FZ6xFc5zzVS9AJwNbdH7ctxuwezCyafl/zjwUxbBq082G3teHgDBzQmzKHZPlJNDLvzI44a1zyPYppJWCN/aaC+BGVQtjUUTu1KYcXb9G94MkcA8Pj18Zyfww1dhvOUStFf/mWUFuEpBBMQXB2GPld+nPUmIhsK/X7w1tT5+OO0QFhijRgydEk/mHr49bq7BBnqOmcDHXFzt+ge0B0opHiqZ1hs99Hx/0JwJZ8aU/HETeqEt0bdJGcvCyK1J7Gurg2Vikawf1rsIB5uZO2FOjnFKM3Zw7N1BVjrJpvNPzO8N8KceTU7lmWl1Q+95ukxnhePiuXEtokXcob2pbaaPg3lEgRKg0o1Bq1na5KJx+62+Mlq6tEKhMALbWr77eOjH2Nm0qBI2iPE6Pk4pGia7XUoO7Xiq4WKrOPPOGZrCzmx67TZlOJTgUVVhSUkuY3BnE8jh9bnm3Fp3P00xsBhp7Grvo1h+e369DPN/zMzn3dIg7Htqo0XXm+2Od1fVzL1rqAgICAgICAgICAgICAgICAgICAgICAgICAfxP/AYcWcBWl/DAQAAAAAElFTkSuQmCC'/>
        <br/>
        <App/>
      </div>
    );
  }
}

export class ReactApplication {

  static initialize(
    containerId: string,
    injector: Injector
  ) {
    ReactDOM.render(
      <ReactApp injector={injector}/>,
      document.getElementById(containerId)
    );
  }
}
