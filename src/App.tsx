import { actions, useAppBridge } from "@saleor/app-sdk/app-bridge";
import { Box, Button, Input, Text } from "@saleor/macaw-ui/next";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const { appBridgeState, appBridge } = useAppBridge();
  const navigate = useNavigate();

  if (!appBridgeState?.ready) {
    return <Box>Loading</Box>;
  }

  return (
    <Box __width="500px" display="grid" gap={5}>
      <div>
        <Text as="p">
          ✅ The App authorized with {appBridgeState?.saleorApiUrl}.
        </Text>
        <Text as="p">🌝 User is {appBridgeState?.user?.email}</Text>
      </div>
      <Box
        borderRadius={3}
        borderColor={"neutralPlain"}
        borderWidth={1}
        borderStyle="solid"
        padding={5}
      >
        <Text variant="heading" as="h3" marginBottom={4}>
          Current app location
        </Text>
        <Input
          disabled
          color="iconNeutralDisabled"
          value={window.location.pathname}
          helperText="The URL path after /app/* should match input content."
        />
      </Box>
      <Button
        onClick={() => {
          navigate("/test");

          // Normally implement some listener on location change, top level
          appBridge?.dispatch(
            actions.UpdateRouting({
              newRoute: "/test",
            })
          );
        }}
      >
        Update route to /test
      </Button>
      <p>Use this automatic route action on your SPA router</p>
    </Box>
  );
};
