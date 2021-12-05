//
//  ViewController.swift
//  FiTi
//
//  Created by m on 2020/09/14.
//  Copyright © 2020 kareui. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController, WKScriptMessageHandler, WKUIDelegate, WKNavigationDelegate {
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        
    }
    
    
    var webViewMain: WKWebView!
    var toWebStr = "";
    var toAppStr = "";
    override func loadView() {
        super.loadView()
        
        UIApplication.shared.isIdleTimerDisabled = true
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // webViewMain
        let contentController = WKUserContentController()
        let config = WKWebViewConfiguration()
        
        // 초기화 오브젝트
        let toWebObj = ["code": "init"]
        let encoder = JSONEncoder()
        if let jsonData = try? encoder.encode(toWebObj) {
            toWebStr = String(data: jsonData, encoding: .utf8)!
        }
        
        
        let userScript = WKUserScript(source: "toWeb(\(toWebStr))", injectionTime: .atDocumentEnd, forMainFrameOnly: true)
        contentController.addUserScript(userScript)
        contentController.add(self, name: "toApp")
        contentController.add(self, name: "consolelog")
        config.userContentController = contentController
        config.allowsInlineMediaPlayback = true
        if #available(iOS 10.0, *) {
            config.mediaTypesRequiringUserActionForPlayback = []
        } else {
            config.mediaPlaybackRequiresUserAction = false// 유저 액션이 없이도 실행되도록 
        }
        webViewMain = WKWebView.init(frame: view.frame, configuration:config)
        webViewMain.backgroundColor = UIColor(red: 0.11, green: 0.12, blue: 0.13, alpha: 1.00)
        self.view.addSubview(webViewMain);
//        self.webViewMain.allowsInlineMediaPlayback = YES;
        self.webViewMain.uiDelegate = self
        self.webViewMain.navigationDelegate = self
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        
        
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        let myURL = Bundle.main.url(forResource: "main", withExtension: "html", subdirectory: "web")!
        webViewMain.loadFileURL(myURL, allowingReadAccessTo: myURL)
        let myRequest = URLRequest(url: myURL)
        webViewMain.load(myRequest);
    }
    
    
}

public extension UIViewController {
    func setStatusBar(color: UIColor) {
        let tag = 12321
        if let taggedView = self.view.viewWithTag(tag){
            taggedView.removeFromSuperview()
        }
        let overView = UIView()
        overView.frame = UIApplication.shared.statusBarFrame
        overView.backgroundColor = color
        overView.tag = tag
        self.view.addSubview(overView)
    }
}
