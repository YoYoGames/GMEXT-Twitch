
#import <WebKit/WebKit.h>

@interface WebViewGM:NSObject <WKUIDelegate>
{
}

@property(nonatomic, strong) WKWebView *webView;
@property(nonatomic, strong) UIImageView *imageView;

@end


