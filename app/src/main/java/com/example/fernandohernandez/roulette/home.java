package com.example.fernandohernandez.roulette;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class home extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        WebView webViewRulles = (WebView) this.findViewById(R.id.webViewRulles);
        WebSettings webSettings = webViewRulles.getSettings();
        webViewRulles.setInitialScale(1);
        webSettings.setUseWideViewPort(true);
        webSettings.setLoadWithOverviewMode(true);
        webSettings.setJavaScriptEnabled(true);
        //webViewRulles.loadUrl("http://appruleta.netai.net/");
        webViewRulles.loadUrl("file:///android_asset/index.html");
        //pantalla completa
        getSupportActionBar().hide();
        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
    }
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        WebView mWebView;
        mWebView = (WebView) findViewById(R.id.webViewRulles);
        if (event.getAction() == KeyEvent.ACTION_DOWN) {
            switch (keyCode) {
                case KeyEvent.KEYCODE_BACK:
                    if (mWebView.canGoBack()) {
                        mWebView.goBack();
                    } else {
                        finish();
                    }
                    return true;
            }
        }
        return super.onKeyDown(keyCode, event);
    }
}
