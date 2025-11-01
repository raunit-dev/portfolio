import { Card, CardContent } from "@/components/ui/card";

export default function Stats() {
  return (
    <Card className="md:col-span-3 md:row-span-2">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">building on</p>
            <h3 className="text-xl font-semibold">Solana ⚡</h3>
          </div>
          <div className="text-4xl">☀️</div>
        </div>
      </CardContent>
    </Card>
  );
}
