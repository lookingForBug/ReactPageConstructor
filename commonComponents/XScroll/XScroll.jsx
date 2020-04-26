import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './XScroll.module.scss';

const cx = classNames.bind(styles);

export class XScroll extends Component {
  startX = 0;
  scrollLeft = 0;
  isMouseDown = false;
  scrollWrapper = null;

  setScrollWrapper = (e) => { if (e) this.scrollWrapper = e; }

  mouseDownHandle = (e) => {
    this.isMouseDown = true;
    this.startX = e.pageX - this.scrollWrapper.offsetLeft;
    this.scrollLeft = this.scrollWrapper.scrollLeft;
  }

  mouseUpHandle = () => {
    this.isMouseDown = false;
  }

  mouseLeaveHandle = () => {
    this.isMouseDown = false;
  }

  mouseMoveHandle = (e) => {
    const { startX, scrollLeft } = this;

    if (!this.isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - this.scrollWrapper.offsetLeft;
    const walk = (x - startX);
    this.scrollWrapper.scrollLeft = scrollLeft - walk;
  }

  render() {
    const { children } = this.props;
    return (
      <div
        ref={e => this.setScrollWrapper(e)}
        onMouseDown={this.mouseDownHandle}
        onMouseUp={this.mouseUpHandle}
        onTouchStart={this.mouseDownHandle}
        onTouchEnd={this.mouseUpHandle}
        onMouseLeave={this.mouseLeaveHandle}
        onMouseMove={this.mouseMoveHandle}
        className={cx('scroller')}
      >
        <div className={cx('content')}>
          {children}
        </div>
      </div>
    );
  }
}