import React from 'react'
import styles from './Loading.scss'
import componentClassNames from 'utility/componentClassNames'
import {TextToImage} from 'utility/image'

class Loading extends React.Component {
  render() {

    return (
      <div className={componentClassNames(this, styles.main)}>
        {/*<img src={require('images/logo-shadowed.png')} className={styles.logo}/>*/}
        <img src={require('images/MachDary.png')} className={styles.logo}/>
        {/*<img src={TextToImage('oo', 175, '#c0c0c0')} className={styles.logo}/>*/}
        {this.props.children}
      </div>
    )
  }
}

export default Loading
