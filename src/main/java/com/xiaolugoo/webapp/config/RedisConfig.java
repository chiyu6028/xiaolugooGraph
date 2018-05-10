package com.xiaolugoo.webapp.config;

import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.cache.annotation.EnableCaching;  
import org.springframework.cache.interceptor.KeyGenerator;  
import org.springframework.context.annotation.Bean;  
import org.springframework.context.annotation.Configuration;  
import org.springframework.data.redis.cache.RedisCacheConfiguration;  
import org.springframework.data.redis.connection.RedisConnectionFactory;  
import org.springframework.data.redis.core.RedisTemplate;  
import org.springframework.data.redis.serializer.RedisSerializationContext;  
import org.springframework.data.redis.serializer.StringRedisSerializer;  
import org.springframework.session.SessionRepository;  
import org.springframework.session.data.redis.RedisOperationsSessionRepository;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

import java.time.Duration;  
  
/** 
 *  redis 配置
 */  
@Configuration  
@EnableCaching
@EnableRedisHttpSession
public class RedisConfig extends CachingConfigurerSupport {  
  
    @Bean  
    @Override  
    public KeyGenerator keyGenerator() {  
        return (target, method, params) -> {  
            StringBuilder sb = new StringBuilder();  
            sb.append(target.getClass().getName());  
            sb.append(method.getName());  
            for (Object obj : params) {  
                sb.append(obj.toString());  
            }  
            return sb.toString();  
        };  
    }  
  
    /** 
     *  设置 redisTemplate 序列化方式 
     * @param factory 
     * @return 
     */  
    @Bean  
    public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory factory) {  
        RedisTemplate<Object, Object> redisTemplate = new RedisTemplate<>();  
        redisTemplate.setConnectionFactory(factory);  
        // 设置值（value）的序列化采用FastJsonRedisSerializer。  
        FastJsonRedisSerializer<Object> fastJsonRedisSerializer = new FastJsonRedisSerializer<>(Object.class);  
        redisTemplate.setValueSerializer(fastJsonRedisSerializer);  
        redisTemplate.setHashValueSerializer(fastJsonRedisSerializer);  
        // 设置键（key）的序列化采用StringRedisSerializer。  
        redisTemplate.setKeySerializer(new StringRedisSerializer());  
        redisTemplate.setHashKeySerializer(new StringRedisSerializer());  
        redisTemplate.setDefaultSerializer(fastJsonRedisSerializer);  
        redisTemplate.afterPropertiesSet();  
        return redisTemplate;  
    }  
  
  
    /** 
     * 设置spring session redis 序列化方式 
     * @param factory 
     * @return 
     */  
    @Bean  
    public SessionRepository sessionRepository(RedisConnectionFactory factory){  
        RedisOperationsSessionRepository sessionRepository =  new RedisOperationsSessionRepository(redisTemplate(factory));  
        FastJsonRedisSerializer<Object> fastJsonRedisSerializer = new FastJsonRedisSerializer<>(Object.class);  
        sessionRepository.setDefaultSerializer(fastJsonRedisSerializer);  
        sessionRepository.setDefaultMaxInactiveInterval(1800);
        sessionRepository.setRedisKeyNamespace("xiaoluSession");
        return sessionRepository;  
    }  
}  