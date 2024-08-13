#import "WebViewGM.h"

const int EVENT_OTHER_SOCIAL = 70;
extern int CreateDsMap( int _num, ... );
extern void CreateAsynEventWithDSMap(int dsmapindex, int event_index);
extern UIViewController *g_controller;
extern UIView *g_glView;
extern int g_DeviceWidth;
extern int g_DeviceHeight;

@implementation WebViewGM

-(id)init {
  if ( self = [super init] )
  {
     
    return self;
  }
}

-(void) WebView_Create:(NSString*) url
{
  CGFloat width = CGRectGetWidth(UIScreen.mainScreen.bounds);
  CGFloat height = CGRectGetHeight(UIScreen.mainScreen.bounds);
  CGRect mCGRectMake = CGRectMake(0,0, width, height);
   
  WKWebViewConfiguration *webConfiguration = [WKWebViewConfiguration new];
  self.webView = [[WKWebView alloc] initWithFrame:mCGRectMake configuration:webConfiguration];
  self.webView.UIDelegate = self;
   
  NSString *urlString = [[NSString stringWithFormat:@"%@", url] stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding];

  NSURL *nsurl = [NSURL URLWithString:urlString];
   
  NSURLRequest *request = [NSURLRequest requestWithURL:nsurl];
  [self.webView loadRequest:request];
  [g_glView addSubview:self.webView];
   
  self.webView.translatesAutoresizingMaskIntoConstraints = NO;
  [g_glView addConstraints:@[
                [NSLayoutConstraint constraintWithItem:self.webView
                              attribute:NSLayoutAttributeBottom
                              relatedBy:NSLayoutRelationEqual
                                toItem:g_controller.bottomLayoutGuide
                              attribute:NSLayoutAttributeBottom
                              multiplier:1
                               constant:0],
                [NSLayoutConstraint constraintWithItem:self.webView
                              attribute:NSLayoutAttributeTop
                              relatedBy:NSLayoutRelationEqual
                                toItem:g_controller.view
                              attribute:NSLayoutAttributeTop
                              multiplier:1
                               constant:0],
                [NSLayoutConstraint constraintWithItem:self.webView
                               attribute:NSLayoutAttributeLeft
                               relatedBy:NSLayoutRelationEqual
                                toItem:g_controller.view
                               attribute:NSLayoutAttributeLeft
                              multiplier:1
                               constant:0],
                 [NSLayoutConstraint constraintWithItem:self.webView
                               attribute:NSLayoutAttributeRight
                               relatedBy:NSLayoutRelationEqual
                                 toItem:g_controller.view
                               attribute:NSLayoutAttributeRight
                               multiplier:1
                                constant:0]
                ]];
}

- (void)webViewDidClose:(WKWebView *)webView;
{
  int dsMapIndex = CreateDsMap(2,
               "type", 0.0, "WebView",
               "event", 0.0, "onCloseWindow"
               );
  CreateAsynEventWithDSMap(dsMapIndex,EVENT_OTHER_SOCIAL);
  self.webView = nil;
}

-(void) WebView_Destroy
{
  if(self.webView == nil)
    return;
   
  [self.webView removeFromSuperview];
  self.webView = nil;
}

-(void) WebView_Button_Add:(NSString*)_path
{
	NSString *path = @"games/";
  UIImage *image = [UIImage imageNamed: [[path stringByAppendingString:_path] lowercaseString]];
  self.imageView = [[UIImageView alloc] initWithImage:image];
  self.imageView.frame = CGRectMake(0, 0, 35, 35);
   
  UITapGestureRecognizer *singleFingerTap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(handleSingleTap:)];
  [self.imageView addGestureRecognizer:singleFingerTap];
  self.imageView.userInteractionEnabled = true;
   
  [g_glView addSubview:self.imageView];
}

-(void) WebView_Button_Destroy
{
  if(self.imageView == nil)
    return;
   
  [self.imageView removeFromSuperview];
  self.imageView = nil;
}

-(void) WebView_Button_SetAlpha:(double) alpha
{
  if(self.imageView == nil)
    return;
   
  self.imageView.alpha = alpha;
}

- (void)handleSingleTap:(UITapGestureRecognizer *)recognizer
{
  int dsMapIndex = CreateDsMap(2,
               "type", 0.0, "WebView",
               "event", 0.0, "onButtonPressed"
               );
  CreateAsynEventWithDSMap(dsMapIndex,EVENT_OTHER_SOCIAL);
}

@end