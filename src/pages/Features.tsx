import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CloudRain,
  Wind,
  Droplets,
  Sun,
  Eye,
  MessageSquare,
  MapPin,
  Calendar,
  Zap,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { updateMetaTags, injectStructuredData } from "@/lib/seo";

const Features = () => {
  useEffect(() => {
    // SEO Meta Tags
    updateMetaTags({
      title: "Features | WeatherNow - Complete Weather Intelligence Platform",
      description:
        "Explore WeatherNow's powerful features: real-time forecasts, AI insights, 5-day predictions, UV tracking, air quality monitoring, and personalized recommendations.",
      keywords:
        "weather features, AI weather, forecast, UV index, air quality, weather alerts, location weather, weather chat",
      url: "https://weathernow.vercel.app/features",
    });

    // Structured Data
    injectStructuredData({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "WeatherNow Features",
      description:
        "Comprehensive list of WeatherNow's weather forecasting and AI-powered features.",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Real-Time Weather",
            description: "Live weather conditions updated every minute",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "5-Day Forecast",
            description: "Detailed predictions for the next 5 days",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI Weather Assistant",
            description: "Interactive chat for personalized weather insights",
          },
        ],
      },
    });
  }, []);

  const features = [
    {
      icon: CloudRain,
      title: "Real-Time Weather",
      description:
        "Get up-to-the-minute weather conditions for any location worldwide with live updates.",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Calendar,
      title: "5-Day Forecast",
      description:
        "Plan ahead with detailed hourly and daily forecasts extending 5 days into the future.",
      color: "text-indigo-600 dark:text-indigo-400",
    },
    {
      icon: MessageSquare,
      title: "AI Weather Assistant",
      description:
        "Chat with our AI to get personalized weather insights, outfit suggestions, and activity recommendations.",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: MapPin,
      title: "Location Services",
      description:
        "Automatically detect your location or search for any city globally to get instant weather data.",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: Sun,
      title: "UV Index Tracking",
      description:
        "Monitor UV radiation levels to protect your skin with timely sun exposure recommendations.",
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Eye,
      title: "Visibility & Air Quality",
      description:
        "Track air quality metrics and visibility conditions for outdoor activity planning.",
      color: "text-teal-600 dark:text-teal-400",
    },
    {
      icon: Wind,
      title: "Wind Analysis",
      description:
        "Detailed wind speed, direction, and gust information for sailors, pilots, and outdoor enthusiasts.",
      color: "text-cyan-600 dark:text-cyan-400",
    },
    {
      icon: Droplets,
      title: "Humidity & Pressure",
      description:
        "Monitor atmospheric pressure trends and humidity levels for health and comfort.",
      color: "text-blue-500 dark:text-blue-300",
    },
    {
      icon: Zap,
      title: "Instant Refresh",
      description:
        "One-click refresh to get the latest weather data anytime you need it.",
      color: "text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-950">
      <header className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Powerful Weather Intelligence
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to stay informed about the weather
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">
              Experience the future of weather forecasting with WeatherNow
            </p>
            <Link to="/">
              <Button size="lg" variant="secondary" className="font-semibold">
                Try WeatherNow Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Features;
