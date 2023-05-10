import { Component } from '@angular/core';
import {  privateKey, publicKey } from './config';
import { JSEncrypt } from 'jsencrypt';

@Component({
  selector: 'app-rsa',
  templateUrl: './rsa.component.html',
  styleUrls: ['./rsa.component.scss']
})
export class RsaComponent {
  plainText: string = '';
  cipherText: string = '';

  $encrypt: any;


  
  ngOnInit() {
    this.$encrypt = new JSEncrypt();
  }

  encrypt() {
		const text = `${this.plainText}`.trim();

		// 1024 位的密钥支持明文长度最大为 127
		if (text.length > 117) {
		} else {
			this.$encrypt.setPublicKey(publicKey);
			this.cipherText = this.$encrypt.encrypt(text);
		}
	}

	decrypt() {
		this.$encrypt.setPrivateKey(privateKey);
		this.plainText = this.$encrypt.decrypt(this.cipherText);
1
		if (Object.is(this.plainText, null)) {
		}
	}
}
