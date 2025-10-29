import { Card } from '@/components/ui/card';
import { Eye, Gauge, Thermometer, Wind } from 'lucide-react';
import type { WeatherData } from '@/types/weather';

interface WeatherMetricsProps {
  data: WeatherData;
}

export const WeatherMetrics = ({ data }: WeatherMetricsProps) => {
  return (
    <Card className="glass p-4 sm:p-6 animate-scale-in hover-scale transition-all">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 text-shadow-soft">
        Detailed Metrics
      </h3>
      
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {/* Feels Like */}
        <div className="bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <Thermometer className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
            <span className="text-white/70 text-xs sm:text-sm">Feels Like</span>
          </div>
          <p className="text-lg sm:text-2xl font-bold text-white">{data.feelsLike}°C</p>
        </div>

        {/* Pressure */}
        <div className="bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
            <span className="text-white/70 text-xs sm:text-sm">Pressure</span>
          </div>
          <p className="text-lg sm:text-2xl font-bold text-white">{data.pressure} hPa</p>
        </div>

        {/* Visibility */}
        <div className="bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
            <span className="text-white/70 text-xs sm:text-sm">Visibility</span>
          </div>
          <p className="text-lg sm:text-2xl font-bold text-white">{data.visibility} km</p>
        </div>

        {/* Wind Speed */}
        <div className="bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <Wind className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
            <span className="text-white/70 text-xs sm:text-sm">Wind Speed</span>
          </div>
          <p className="text-lg sm:text-2xl font-bold text-white">{data.windSpeed} m/s</p>
        </div>
      </div>
    </Card>
  );
};
