import React from 'react';
import { Log, Wrapper } from './style';

const LogView: React.FC = () => {
  return (
    <Wrapper>
      <Log>{`07:52:21.955 DEBUG [WebDriverServlet.lambda$handle$0] - /session: Executing POST on /session (handler: BeginSession)
07:52:22.119 INFO [ActiveSessionFactory.apply] - Capabilities are: {
  "browserName": "chrome",
  "browserVersion": "107.0",
  "goog:chromeOptions": {
    "binary": "c:\\Program Files (x86)\\Google\\Chrome\\Application\\107.0.5304.63\\chrome.exe",
    "prefs": {
      "browser": {
        "show_update_promotion_info_bar": false,
        "check_default_browser": false
      },
      "devtools": {
        "preferences": {
          "cacheDisabled": true
        }
      },
      "profile": {
        "password_manager_enabled": false
      }
    },
    "args": [
      "test-type",
      "--disable-application-cache",
      "--media-cache-size=1"
    ],
    "w3c": true
  },
  "goog:loggingPrefs": {
    "driver": "ALL",
    "browser": "ALL",
    "performance": "ALL",
    "server": "ALL"
  }
}
07:52:22.121 INFO [ActiveSessionFactory.lambda$apply$11] - Matched factory org.openqa.selenium.grid.session.remote.ServicedSession$Factory (provider: org.openqa.selenium.chrome.ChromeDriverService)
07:52:22.159 DEBUG [UrlChecker.waitUntilAvailable] - Waiting for [http://localhost:35952/status]
07:52:22.160 DEBUG [UrlChecker.lambda$waitUntilAvailable$1] - Polling http://localhost:35952/status
07:52:22.684 DEBUG [UrlChecker.lambda$waitUntilAvailable$1] - Polling http://localhost:35952/status
07:52:22.687 DEBUG [HttpURLConnection.writeRequests] - sun.net.www.MessageHeader@16409855 pairs: {GET /status HTTP/1.1: null}{User-Agent: Java/1.8.0_181}{Host: localhost:35952}{Accept: text/html, image/gif, image/jpeg, *; q=.2, */*; q=.2}{Connection: keep-alive}
07:52:22.691 DEBUG [HttpURLConnection.getInputStream0] - sun.net.www.MessageHeader@66820d4 pairs: {null: HTTP/1.1 200 OK}{Content-Length: 250}{Content-Type: application/json; charset=utf-8}{cache-control: no-cache}
07:52:24.929 INFO [ProtocolHandshake.createSession] - Detected dialect: W3C
07:52:28.633 DEBUG [ReverseProxyHandler.execute] - To downstream: {"value":[{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948183},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948184},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948184},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948185},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948185},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948185},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948186},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948187},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948187},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948187},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948188},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948188},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log 948193},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948193},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948194},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948194},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948194},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948194},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948194},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948195},{"level":"INFO","message":"console-api 4:16 \"Browserstack console log test\"","source":"console-api","timestamp":1667479948195}]}`}</Log>
    </Wrapper>
  );
};

export default LogView;
